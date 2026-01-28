
import { Footer } from "./footer";
import { getPayload } from 'payload'
//  
import Navbar from "./Navbar";
import Searchbox from "./search-filters";
//  
import { Categories } from "@/payload-types";
import ConfigPromise from '@payload-config'

interface LayoutProps {
  children: React.ReactNode;
}

// Fetch categories data from Payload CMS in layout
const Layout = async ({ children }: LayoutProps) => {
  const payload = await getPayload({
    config: ConfigPromise
  })
// Fetch categories data from Payload CMS
  const data = await payload.find({
    collection: 'categories',
    depth: 1,
    pagination: false,
    where: {
      parent: {
        exists: false
      },
    },
  });

  // Format the data to remove nested subcategories

  const formattedData = data.docs.map((doc) => ({
    ...doc,
    subcategory: (doc.subcategory?.docs ?? []).map((doc: Categories) => ({
      ...(doc as Categories),
      subcategory: undefined,
    })), // Extract subcategory docs
  }));

  console.log({data, formattedData}); 
  

  return (
    <div className="flex flex-col min-h-screen" >
      <Navbar />
      <Searchbox data={formattedData} />
      <div className="flex-1 bg-[#f5f5f0]">
        {children}
      </div>
      <Footer />
    </div >
  )
};

export default Layout;