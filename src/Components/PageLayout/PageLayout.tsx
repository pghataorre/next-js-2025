export default function PageLayout ({children}: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="main">
          <div className="page">
            {children}
          </div>
      </main>
    );
  }
  