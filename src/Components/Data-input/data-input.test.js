import React from 'react';
import { mount } from 'enzyme';
import DataInput from './data-input.component'


describe('Triangle type component', () => {

    const mockFn = jest.fn();
    const mockProps = {
        sendInputData: mockFn
    }
    
    
    
    it("Triangle side inputs do not allow any other data type except for number", () => {
        
        const wrapper = mount(<DataInput {...mockProps} />)

        const sideA = wrapper.find('input')
            .at(0)
            .simulate('change', { target: { name: 'sideA', value: 'some string' } })

        const sideB = wrapper.find('input')
            .at(1)
            .simulate('change', { target: { name: 'sideB', value: {} } })
        const sideC = wrapper.find('input')
            .at(2)
            .simulate('change', { target: { name: 'sideC', value: [] } })
        
        
        expect(sideA.instance().value).toBe("");
        expect(sideB.instance().value).toBe("");
        expect(sideC.instance().value).toBe("");
    })

    it("Triangle side inputs only allow number input", () => {
        const wrapper = mount(<DataInput {...mockProps} />)

        const sideA = wrapper.find('input')
            .at(0)
            .simulate('change', { target: { name: 'sideA', value: '231s' } })

        const sideB = wrapper.find('input')
            .at(1)
            .simulate('change', { target: { name: 'sideB', value: 2 } })
        
        const sideC = wrapper.find('input')
            .at(2)
            .simulate('change', { target: { name: 'sideC', value: 5 } })

        
        expect(sideA.instance().value).toBe("");
        expect(sideB.instance().value).toBe("2");
        expect(sideC.instance().value).toBe("5");

    })


    it("Triangle side inputs dont not allow numbers that are not within 1 - 100 range", () => {
        const wrapper = mount(<DataInput {...mockProps} />)

        const sideA = wrapper.find('input')
            .at(0)
            .simulate('change', { target: { name: 'sideA', value: -1 } })

        const sideB = wrapper.find('input')
            .at(1)
            .simulate('change', { target: { name: 'sideB', value: 0 } })
        
        const sideC = wrapper.find('input')
            .at(2)
            .simulate('change', { target: { name: 'sideC', value: 101 } })

        
        expect(sideA.instance().value).toBe("");
        expect(sideB.instance().value).toBe("");
        expect(sideC.instance().value).toBe("");

    })

    it("Triangle side inputs only allow whole numbers and dont not allow float numbers - float numbers get ceiled", () => {
        const wrapper = mount(<DataInput {...mockProps} />)

        const sideA = wrapper.find('input')
            .at(0)
            .simulate('change', { target: { name: 'sideA', value: 3.25 } })

        const sideB = wrapper.find('input')
            .at(1)
            .simulate('change', { target: { name: 'sideB', value: 1.00013 } })
        
        const sideC = wrapper.find('input')
            .at(2)
            .simulate('change', { target: { name: 'sideC', value: 4.99 } })

        
        expect(sideA.instance().value).toBe("4");
        expect(sideB.instance().value).toBe("2");
        expect(sideC.instance().value).toBe("5");

    })



})