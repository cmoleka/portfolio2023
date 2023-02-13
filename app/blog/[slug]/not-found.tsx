import { PageWrapper } from "@components/PageWrapper";
export default function NotFound() {
  return (
    <PageWrapper>
      <div className="container mx-auto w-full space-y-20 py-6 px-6">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
      </div>
    </PageWrapper>
  );
}
