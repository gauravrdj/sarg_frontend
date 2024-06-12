

export function Loader(){
    return (
        <div className="relative">
          {/* Blurred background */}
          <div className={"fixed inset-0 bg-gray-200 bg-opacity-75 blur-md"}></div>
    
          {/* Loader */}
          
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Loader
                type="Oval"
                color="#4A90E2" // Change color as needed
                height={50}
                width={50}
              />
              
            </div>

            </div>
    );    
}