import { Accordion } from 'flowbite-react'
import React from 'react'

interface PageProps {
  headerTitle: React.ReactNode;
  accordionTitle: React.ReactNode;
  dataSource: any

}

interface ChipInterface {
  name: React.ReactNode;
  url: string;
  icon?: React.ReactNode
}

export function CustomChip({ name, url, icon }: ChipInterface) {
  return (
    <a href={url} className="flex flex-row space-x-2 items-center rounded-xl px-4 py-2 bg-zinc-200 self-start hover:bg-orange-200">
      {icon && icon}
      <p className="text-sm font-normal text-slate-899">{name}</p>
    </a>
  )
}

const AccordionWithTitle = ({ headerTitle, accordionTitle, dataSource }: PageProps) => {
  return (
    <main className='flex flex-col space-y-3 px-10 py-6'>
      <p className="text-2xl font-bold text-slate-700">{headerTitle}</p>
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>{accordionTitle}</Accordion.Title>
          <Accordion.Content>
            <section className="flex flex-row space-x-2 flex-wrap space-y-2 items-center">
              {
                dataSource?.map((item: any) => {
                  return (
                    <CustomChip
                      url={item?.url}
                      name={item?.name}
                      icon={item?.icon}
                      />

                  )
                })
              }
            </section>

          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </main>
  )
}

export default AccordionWithTitle