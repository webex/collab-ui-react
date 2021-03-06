import React from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import { Button, Icon } from '@collab-ui/react';

/**
 * @category controls
 * @component activity-button
 * @variations collab-ui-react
 */

const ActivityButton = props => {
  const {
    type,
    large,
    onClick,
    disabled,
    className,
    ariaLabel,
    ...otherHTMLProps
  } = props;

  return (
    <Button
      className={
        'cui-activity' +
        `${!type.icon && ` cui-activity__${type}` || ''}` +
        `${(large && ' cui-activity--large') || ''}` +
        `${(className && ` ${className}`) || ''}`
      }
      circle
      disabled={disabled}
      onClick={onClick}
      ariaLabel={ariaLabel || (!type.icon && type) || ''}
      color={_.get(type, 'color')}
      {...(large && {containerLarge: true})}
      {...otherHTMLProps}
    >
      {type.icon ? type.icon : <Icon name={`${type}${large ? '_36' : '_28'}`} />}
    </Button>
  );
};

ActivityButton.displayName = 'ActivityButton';

ActivityButton.propTypes = {
  /**
   *  activity prop type
   */
  type: PropTypes.oneOfType([
    PropTypes.oneOf(['chat', 'camera', 'meetings', 'whiteboard', 'files', 'share-screen', 'tasks']),
    PropTypes.shape({
      color: PropTypes.string,
      icon: PropTypes.element.isRequired,
    })
  ]).isRequired,
  /**
   * Handler to be called when the user taps the button
   */
  onClick: PropTypes.func,
  /**
   * @ignore
   * optional css class string
   */
  className: PropTypes.string,
  /**
   * Sets the attribute disabled to the button
   */
  disabled: PropTypes.bool,
  /**
   * Sets the large attribute to the button
   */
  large: PropTypes.bool,
  /**
   * Text to display for blindness accessibility features
   */
  ariaLabel: PropTypes.string,
};

ActivityButton.defaultProps = {
  type: '',
  large: false,
  onClick: null,
  className: '',
  disabled: false,
  ariaLabel: '',
};

export default ActivityButton;

/**
* @name Default Activity Button
* @description Default Activity Button.
*
* @category controls
* @component activity-button
* @section default
*
* @js

export default function ActivityButtonDefault() {
  return(
    <div className='row' style={{marginBottom: '1rem'}}>
      <div>Default</div>
      <div style={{margin: `16px`}}>
        <ActivityButton
          type='chat'
          ariaLabel='jlshjksfghjl'
          onClick={()=>{}}
          label='Chat'
        />
        <ActivityButton
          type='camera'
          onClick={()=>{}}
          label='Camera'
        />
        <ActivityButton
          type='meetings'
          onClick={()=>{}}
          label='Meetings'
        />
        <ActivityButton
          type='whiteboard'
          onClick={()=>{}}
          label='Whiteboard'
        />
        <ActivityButton
          type='files'
          onClick={()=>{}}
          label='Files'
        />
        <ActivityButton
          type='share-screen'
          onClick={()=>{}}
          label='Share'
        />
        <ActivityButton
          type='tasks'
          onClick={()=>{}}
          label='Tasks'
        />
      </div>
    </div>
  );
}

**/

/**
* @name ActivityButton with large
* @description ActivityButton with large class.
*
* @category controls
* @component activity-button
* @section large
*
* @js

export default function ActivityButtonLarge() {
  return(
    <div className='row' style={{marginBottom: '1rem'}}>
      <div>Default</div>
      <div style={{margin: `16px`}}>
        <ActivityButton
          type='chat'
          large
          onClick={()=>{}}
          label='Chat'
          ariaLabel='Chat'
        />
        <ActivityButton
          type='camera'
          large
          onClick={()=>{}}
          label='Camera'
          ariaLabel='Camera'
        />
        <ActivityButton
          type='meetings'
          large
          onClick={()=>{}}
          label='Meetings'
          ariaLabel='Meetings'
        />
        <ActivityButton
          type='whiteboard'
          large
          onClick={()=>{}}
          label='Whiteboard'
          ariaLabel='Whiteboard'
        />
        <ActivityButton
          type='files'
          large
          onClick={()=>{}}
          label='Files'
          ariaLabel='Files'
        />
        <ActivityButton
          type='share-screen'
          large
          onClick={()=>{}}
          label='Share'
          ariaLabel='Share'
        />
        <ActivityButton
          type='tasks'
          large
          onClick={()=>{}}
          label='Tasks'
          ariaLabel='Tasks'
        />
      </div>
    </div>
  );
}

**/

/**
* @name ActivityButton with custom
* @description ActivityButton with custom prop.
*
* @category controls
* @component activityButton
* @section custom
*
* @js

export default function ActivityButtonCustom() {
  return(
    <div className='row' style={{marginBottom: '1rem'}}>
      <div>Default</div>
      <div style={{margin: `16px`}}>
        <ActivityButton
          type={{
            color: 'mint',
            icon: <span className='icon icon-arrow-left_32'/>
          }}
          large
          onClick={()=>{}}
          ariaLabel='Left Arrow'
        />
        <ActivityButton
          type={{
            color: 'red',
            icon: <span className='icon icon-keyboard_16'/>
          }}
          onClick={()=>{}}
          ariaLabel='Keyboard'
        />
      </div>
    </div>
  );
}

**/
