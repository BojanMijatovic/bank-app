import React from 'react';
import Widget from './Widget/Widget';
class WidgetZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widgets: [
        {
          name: 'wawe2pay',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quisquam natus quia quaerat, sed quia doloremque.',
          image: 'https://www.wave2pay.com/wp-content/uploads/2017/09/logo-wave2pay.png',
          link: 'https://www.wave2pay.com/',
          buttonName: 'Find More',
        },
        {
          name: 'wawe2pay',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quisquam natus quia quaerat, sed quia doloremque.',
          image: 'https://www.wave2pay.com/wp-content/uploads/2017/09/logo-wave2pay.png',
          link: 'https://www.wave2pay.com/',
          buttonName: 'Find More',
        },
        {
          name: 'wawe2pay',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quisquam natus quia quaerat, sed quia doloremque.',
          image: 'https://www.wave2pay.com/wp-content/uploads/2017/09/logo-wave2pay.png',
          link: 'https://www.wave2pay.com/',
          buttonName: 'Find More',
        },
      ],
    };
  }
  render() {
    return (
      <div className='grid grid-cols-3 gap-4 bg-gray-200  text-gray-700 pt-10 pb-10'>
        {this.state.widgets.map((widget, index) => {
          return (
            <Widget
              key={index}
              name={widget.name}
              description={widget.description}
              image={widget.image}
              link={widget.link}
              buttonName={widget.buttonName}
            />
          );
        })}
      </div>
    );
  }
}

export default WidgetZone;
