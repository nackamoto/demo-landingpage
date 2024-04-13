import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Africa, HelpCenter, WorldWide, company } from '../data/fields';

function CustomFooterLink({ title, dataSource }: { title: React.ReactNode, dataSource: any }) {
    return <div>
        <Footer.Title title={title as string} />
        <Footer.LinkGroup col>
            {
                dataSource?.map((item: any) => {
                    return (

                        <Footer.Link href={item.url}>{item?.name}</Footer.Link>
                    )
                })
            }

        </Footer.LinkGroup>
    </div>;

}


const BottomFooter = () => {
    return (
        <main className='flex flex-col'>
            <footer className="bg-sky-100">
                <Footer className='bg-sky-100'>
                    <div className="w-full">
                        <div className="grid w-full grid-cols-2 gap-x-4 px-6 py-8 md:grid-cols-4">
                            <CustomFooterLink
                                title={`AFRICA`}
                                dataSource={Africa}
                            />
                            <CustomFooterLink
                                title={`Cl WORLDWIDE`}
                                dataSource={WorldWide}
                            />
                            <CustomFooterLink
                                title={`COMPANY`}
                                dataSource={company}
                            />
                            <CustomFooterLink
                                title={`HELP CENTER`}
                                dataSource={HelpCenter}
                            />
                        </div>

                        <div className="w-full bg-gray-200 px-4 py-3 sm:flex sm:items-center sm:justify-between">
                            <Footer.Copyright href="#" by="craigslist" year={2024} />
                            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                                <Footer.LinkGroup >

                                    <Footer.Link href={``}>{`Help`}</Footer.Link>
                                    <Footer.Link href={``}>{`safety`}</Footer.Link>
                                    <Footer.Link href={``}>{`privacy`}</Footer.Link>
                                    <Footer.Link href={``}>{`terms`}</Footer.Link>
                                    <Footer.Link href={``}>{`about`}</Footer.Link>
                                    <Footer.Link href={``}>{`app`}</Footer.Link>
                                    <Footer.Link href={``}>{`sitemap`}</Footer.Link>
                                </Footer.LinkGroup>

                            </div>
                        </div>
                    </div>
                </Footer>
            </footer>
        </main>
    )



}

export default BottomFooter