import React from 'react';
import { mount } from 'enzyme';
import TriangleType from './triangle-type.component'


describe('Triangle type component', () => {

    window.scrollTo = jest.fn();
    const mockFn = jest.fn();

    it("Outputs 'It is not possible to calculate this kind of triangle' if triangle is invalid.", () => {

        const mockProps = {
            triangleSides: {
                sideA: 8,
                sideB: 3,
                sideC: 2
            },
            sendIsTriangleDrawable: mockFn
        }

        const wrapper = mount(<TriangleType {...mockProps} />)
        
        expect(wrapper.find('h2').text()).toBe('It is not possible to calculate this kind of triangle');
    })


    it("Outputs 'Triangle is equilateral' if all sides are equal.", () => {

        const mockProps = {
            triangleSides: {
                sideA: 4,
                sideB: 4,
                sideC: 4
            },
            sendIsTriangleDrawable: mockFn
        }

        const wrapper = mount(<TriangleType {...mockProps} />)
        
        expect(wrapper.find('h2').text()).toBe('Triangle is equilateral');
    })


    it("Outputs 'Triangle is isoceles' if two sides are equal.", () => {

        const mockProps = {
            triangleSides: {
                sideA: 4,
                sideB: 3,
                sideC: 4
            },
            sendIsTriangleDrawable: mockFn
        }

        const wrapper = mount(<TriangleType {...mockProps} />)
        
        expect(wrapper.find('h2').text()).toBe('Triangle is isoceles');
    })


    it("Outputs 'Triangle is scalene' if each side is different.", () => {

        const mockProps = {
            triangleSides: {
                sideA: 4,
                sideB: 2,
                sideC: 3
            },
            sendIsTriangleDrawable: mockFn
        }

        const wrapper = mount(<TriangleType {...mockProps} />)
        
        expect(wrapper.find('h2').text()).toBe('Triangle is scalene');
    })

})