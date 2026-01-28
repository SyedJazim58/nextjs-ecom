import { Categories } from '@/payload-types';
import ConfigPromise from '@payload-config'
import { getPayload } from 'payload'

async function About() {
  const payload = await getPayload({
    config: ConfigPromise
  })

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

  const formattedData = data.docs.map((doc) => ({
    ...doc,
    subcategory: (doc.subcategory?.docs ?? []).map((doc: Categories) => ({
      ...(doc as Categories),
      subcategory: undefined,
    })), // Extract subcategory docs
  }));

  console.log({ data, formattedData });
  return (
    <div>
      <div>{JSON.stringify(data, null, 2)}</div>
      <div>{JSON.stringify(formattedData, null, 2)}</div>
    </div>
  )
}

export default About