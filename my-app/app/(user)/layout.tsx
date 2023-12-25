import Header from "@/components/header/header"

export default function UserLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <div className="sticky top-0 z-50"><Header /></div>
        {children}
      </section>
    )
  }