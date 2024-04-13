import React from 'react'
import AccordionWithTitle from './customaccordion'
import { community, discussionForums, forSale, housing, jobs, services } from '../data/fields'

const MainBodySection = () => {
    return (
        <main className='w-full py-12 overflow-y-auto'>
            <section className="grid grid-cols-1 lg:grid-cols-3 mt-6">

                <AccordionWithTitle
                    accordionTitle={`Community`}
                    headerTitle={`Our Community`}
                    dataSource={community}

                />
                <AccordionWithTitle
                    accordionTitle={`Services`}
                    headerTitle={`Services`}
                    dataSource={services}

                />
                <AccordionWithTitle
                    accordionTitle={`Housing`}
                    headerTitle={`Housing`}
                    dataSource={housing}

                />
                <AccordionWithTitle
                    accordionTitle={`Job Lists`}
                    headerTitle={`Jobs`}
                    dataSource={jobs}

                />
                <AccordionWithTitle
                    accordionTitle={`For Sale`}
                    headerTitle={`For Sale`}
                    dataSource={forSale}

                />
                <AccordionWithTitle
                    accordionTitle={`Discussion Forums`}
                    headerTitle={`Discussion Forum`}
                    dataSource={discussionForums}

                />

            </section>
        </main>
    )
}

export default MainBodySection

