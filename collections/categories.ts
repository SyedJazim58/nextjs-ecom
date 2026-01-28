import type { CollectionConfig } from 'payload'
import type { Field } from 'payload'

export const Categories : CollectionConfig = {
  slug: 'categories',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'color',
      type: 'text',
    },
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: false,
    },
    {
      name: 'subcategory',
      type: 'join',
      collection: 'categories',
      on: 'parent',
      hasMany: true,
    }
  ],
}