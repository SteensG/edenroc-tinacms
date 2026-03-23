'use client'

export default function AdminPage() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.location.href = '/admin/index.html'`,
      }}
    />
  )
}
