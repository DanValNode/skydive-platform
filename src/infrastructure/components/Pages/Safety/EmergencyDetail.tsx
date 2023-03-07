import React from 'react'
import DetailAndGallery from '../../Controls/DetailAndGallery'
import TabContainer from '../../Controls/TabContainer'
import data from '../../../utils/emergencies-db.json'

const EmergencyDetail: React.FC<any> = (props) => {
  const identifier = sessionStorage.getItem('emergency-id') ?? '1'

  return (
        <div className="main">
            <section className="module">
                <div className="container">
                    <DetailAndGallery
                        image={data.emergencies.find(x => x.identifier === parseInt(identifier))?.images}
                        mainImage={data.emergencies.find(x => x.identifier === parseInt(identifier))?.mainImage}
                        title={data.emergencies.find(x => x.identifier === parseInt(identifier))?.title}
                        text={data.emergencies.find(x => x.identifier === parseInt(identifier))?.text}
                        videos={data.emergencies.find(x => x.identifier === parseInt(identifier))?.videos}
                    />
                    <TabContainer onSelectProduct={ () => alert('') } identifier={parseInt(identifier)} />
                </div>
            </section>
        </div>
  )
}

export default EmergencyDetail
