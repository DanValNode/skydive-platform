import React from 'react'

type MainBannerSectionProps = {
    image: string,
    title: string,
    description:string
}

const MainBannerSection: React.FC<MainBannerSectionProps> = (props) => {
  return (
        <section className="module bg-dark-90 shop-page-header" data-background={props.image}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h2 className="module-title font-alt">{props.title}</h2>
                        <div className="module-subtitle font-serif">
                            {props.description}
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default MainBannerSection
