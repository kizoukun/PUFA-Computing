export default function AspirationCard() {
   return (
      <div className="flex flex-col gap-8 rounded-lg border-2 border-gray-300 px-4 py-8">
         <h1 className="text-[1.2rem] font-bold">Enrollment</h1>
         <p>
            testing testing testing testing testing testing testing testing
            testing testing testing testing.
         </p>
         <p>Admin: sorry ya, tidak akan dilayanin.</p>
         <div className="flex flex-col">
            <p className="font-bold">Anonymous</p>
            <div className="flex justify-between">
               <div className="flex gap-2">
                  <p>To: Puma IT</p>
                  <p>Feb 14, 3099</p>
               </div>
               <div className="flex gap-2">
                  <p>7</p>
                  <div>logo heart</div>
               </div>
            </div>
         </div>
      </div>
   );
}
