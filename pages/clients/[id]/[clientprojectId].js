import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();
    const query = router.query;
    
    

  return (
    <div>
      <h1>
        The project page for {query.clientprojectId} by {query.id} 
      </h1>
    </div>
  );
}
export default SelectedClientProjectPage;
