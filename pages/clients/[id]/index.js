import { useRouter } from 'next/router';

function ClientProjectsPage() {
    const router = useRouter();
    const query = router.query;
    console.log(query.id)
    function loadProjectHandler() {
      router.push({
        pathname: "/clients/[id]/[clientprojectId]",
        query: {
          id: query.id,
          clientprojectId: "Iot-Device",
        },
      });
    }
    return (
    <div>
            <h1> The Projects of a Client</h1>
            <button onClick={loadProjectHandler}>Iot Device</button>
    </div>
  );
}
export default ClientProjectsPage;
