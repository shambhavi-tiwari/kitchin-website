import { type NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), "data")
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Path to the emails file
    const emailsFile = path.join(dataDir, "waitlist-emails.json")

    // Read existing emails or create empty array
    let emails = []
    if (fs.existsSync(emailsFile)) {
      const fileContent = fs.readFileSync(emailsFile, "utf8")
      emails = JSON.parse(fileContent)
    }

    // Check if email already exists
    const existingEmail = emails.find((entry: any) => entry.email === email)
    if (existingEmail) {
      return NextResponse.json({ message: "Email already subscribed" }, { status: 200 })
    }

    // Add new email with timestamp
    const newEntry = {
      email,
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString("en-IN"),
      time: new Date().toLocaleTimeString("en-IN"),
    }

    emails.push(newEntry)

    // Write back to file
    fs.writeFileSync(emailsFile, JSON.stringify(emails, null, 2))

    return NextResponse.json({ message: "Successfully subscribed" }, { status: 200 })
  } catch (error) {
    console.error("Error saving email:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// Optional: GET endpoint to view emails (for your reference)
export async function GET() {
  try {
    const emailsFile = path.join(process.cwd(), "data", "waitlist-emails.json")

    if (!fs.existsSync(emailsFile)) {
      return NextResponse.json({ emails: [] })
    }

    const fileContent = fs.readFileSync(emailsFile, "utf8")
    const emails = JSON.parse(fileContent)

    return NextResponse.json({
      emails,
      total: emails.length,
      latest: emails[emails.length - 1],
    })
  } catch (error) {
    console.error("Error reading emails:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
