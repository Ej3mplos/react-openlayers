import React from 'react';


/** 
 * This is a "view" component use to render a button (option) of filter.
 * 
 * @author Ricardo Bermúdez Bermúdez
 * @since  7th Oct, 2019.
 * 
 * @param   {IconSVG} p.icon       Icon of button.
 * @param   {string}  p.string     Title of button.
 * @param   {object}  p.titleStyle Custom styles to button title.
 * @returns {React.Component}      Div container of button. 
 */
export class FilterButton extends React.Component {

  /**
     * Constructor method. Set the button state as false.
     * 
     * @since Oct 9th, 2019.
     */
  constructor(...props) {
    super(...props);
    this.state = {active: false};
  }
  
    /**
     * Change state of filter button select by user. Additionaly, trigger the
     * click action if this button is active.
     * 
     * @since Oct 9th, 2019.
     */
  onPressActive() {
    let active = !this.state.active;
    let { clickActive, clickInactive } = this.props;
    
    this.setState({active});
    active 
    ? typeof clickActive   === 'function' && clickActive()
    : typeof clickInactive === 'function' && clickInactive();
  }
  
  /**
   * Render the button.
   * 
   * @since Oct 9th, 2019.
   */
  render() {
    let { icon, title, titleStyle, separator=true } = this.props;
    
    return (
      <React.Fragment>
        <div 
          className={`filter__btn-filter ${this.state.active?'--is-active':''}`}
          onClick={() => this.onPressActive()}>
            {icon}
            <p className="text--note" style={titleStyle}>{title}</p>
        </div>
        {separator?<div className="filter__btn-sep"/>:null}
      </React.Fragment>
    );
  }
}