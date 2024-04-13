import React from 'react'
import AccordionWithTitle from './customaccordion'
import { community, forSale, housing, jobs, services } from '../data/fields'
import MyCalendar from './event'

const MainBodySection = () => {
    return (
        <main className='w-full h-full flex- overflow-y-auto'>
            <section className="grid grid-cols-3">

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
                    accordionTitle={`For Save`}
                    headerTitle={`For Save`}
                    dataSource={forSale}

                />
                <AccordionWithTitle
                    accordionTitle={`Discussion Forums`}
                    headerTitle={`Discussion Forum`}
                    dataSource={forSale}

                />

            </section>
        </main>
    )
}

export default MainBodySection

