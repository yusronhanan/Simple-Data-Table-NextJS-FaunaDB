import Layout from "../components/Organisms/Layout";
import Title from "../components/Atoms/Title";
import Hello from "../components/Atoms/Hello";
import DataSection from "../components/Organisms/DataSection";
export default function Home() {
  return (
    <>
      <Title text="Order List" />
      <Layout>
        <Hello name="Insgina" />
        <DataSection />
      </Layout>
    </>
  );
}
