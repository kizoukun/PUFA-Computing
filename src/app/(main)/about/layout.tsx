export default async function MainLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return <div> navbar about{children}</div>;
}
