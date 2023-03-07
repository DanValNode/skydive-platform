import React from 'react'
import data from '../../utils/emergencies-db.json'
import parse from 'html-react-parser'

type TabProps = {
    onSelectProduct: (product: string) => void,
    identifier: number
}

const TabContainer: React.FC<TabProps> = (props) => {
  return (
      <div className="row mt-70">
        <div className="col-sm-12">
          <ul className="nav nav-tabs font-alt" role="tablist">
            {
              data.TabInfoEmergency.find(x => x.emergency === props.identifier)?.data?.map((item, index) =>
                  <li key={index} className={index === 0 ? 'active' : ''}>
                    <a href={'#' + item.id} data-toggle="tab">
                      <span className="icon-tools-2"></span>
                      {item.header}
                    </a>
                  </li>
              )
            }
          </ul>
          <div className="tab-content">
            {
              data.TabInfoEmergency.find(x => x.emergency === props.identifier)?.data?.map((item, index) =>
                  <div key={index} className={index === 0 ? 'tab-pane active' : 'tab-pane'} id={item.id}>
                    <p style={{ textAlign: 'left' }}>
                      {parse(item.text ?? '')}
                    </p>
                  </div>
              )
            }
          </div>
        </div>
      </div>
  )
}

export default TabContainer
