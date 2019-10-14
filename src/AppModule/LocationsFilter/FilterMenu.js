import React from 'react';
import { Swipeable }    from 'react-swipeable';
import { connect } from 'react-redux';

import { FilterButton } from './FilterButton'
import { IconPay }      from './FilterSVGIcons/IconPay';
import { IconCash }     from './FilterSVGIcons/IconCash';
import { IconAddMoney } from './FilterSVGIcons/IconAddMoney';
import { addFilter, removeFilter } from './../General/Store/Filter';
import LocationTypes from './LocationTypes';


/**
 * This component manage the filter to stores locations applied by the app user.
 * 
 * @author Ricardo Bermúdez Bermúdez
 * @since  7th Oct, 2019.
 * @since  8th Oct, 2019. Change the component function definition by class.
 */
class FilterMenu extends React.Component {

  /**
   * constructor method. Set state of filter to manage the buttons state.
   * @since Oct 8th, 2019.
   * @param {...any} props Arguments to send to React.Component constructor.  
   */
  constructor(...props) {
    super(...props);
    this.state = { active: false }
  }
  
  /**
   * Active the filter menu (menu is up) by flag active.
   */
  upMenu   = () => this.setState({active: true});

  /**
   * Inactive the filter menu (menu is down) by flag active.
   */
  downMenu = () => this.setState({active: false});

  /**
   * This method build an properties object that will pass as properties
   * arguments to FilterButton component to add or remove an filter from
   * application state.
   * 
   * @since Oct 10th, 2019.
   * 
   * @param   {string} filterType Constant key of filter.
   * @returns {Object} Object with click events as properties.
   */
  filterActions = (filterType) => ({
    clickActive:   ()=> this.props.addFilter(filterType),
    clickInactive: ()=> this.props.removeFilter(filterType)
  })

  /**
   * Render the filter component.
   * 
   * @since Oct 8th, 2019.
   */
  render = () =>
    <Swipeable
     onSwipedDown={this.props.swipeDown}
     onSwipedUp={this.props.swipeUp}>
      <div className={`filter`}>
        <div className="filter__btn-drag"/>
        <p className="text--abstract">
          Selecciona la opción que quieres
          para ver el lugar más cercano.
        </p>
        <div className="filter__btn-bar">
          <FilterButton 
            icon  ={<IconPay/>}
            title ="Paga en Comercios"
            {...this.filterActions(LocationTypes.COMMERCE)}/>
          <FilterButton
            icon  ={<IconCash/>}
            title ="Retirar"
            {...this.filterActions(LocationTypes.GET_CASH)}/>
          <FilterButton
            icon  ={<IconAddMoney/>}
            title ="Agregar Fondos"
            {...this.filterActions(LocationTypes.ADD_CREDIT)}/>
          <FilterButton
            icon  ={<IconPay/>}
            title ="Promociones"
            titleStyle={{width: 60}}
            separator={false}
            {...this.filterActions(LocationTypes.PROMOTIONS)}/>
        </div>
      </div>
    </Swipeable>;
}

export default connect(null, {addFilter, removeFilter})(FilterMenu);