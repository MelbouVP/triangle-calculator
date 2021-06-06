import React from 'react';
import { shallow } from 'enzyme';
import Drawing from './drawing.component.jsx'

describe('Drawing component', () => {

    it('Does not render drawing if triangle type is invalid', () => {
        const mockProps = {
            isDrawable: false
        }

        const wrapper = shallow(<Drawing {...mockProps} />)
        
        expect(wrapper.find('canvas').exists()).toBe(false);
    })

    it('Renders drawing if triangle type is valid', () => {
        const mockProps = {
            isDrawable: true
        }

        const wrapper = shallow(<Drawing {...mockProps} />)
        
        expect(wrapper.find('canvas').exists()).toBe(true);
    })



})