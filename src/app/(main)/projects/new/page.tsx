import ProjectForm from "./_components/Form";

export default async function ProjectsNewPage() {
   return (
      <div className="mx-auto my-4 mb-8 max-w-xl">
         <div className="space-y-4 rounded-lg p-5 shadow-lg">
            <p className="text-center text-lg font-bold">New Project</p>
            <ProjectForm />
         </div>
      </div>
   );
}
