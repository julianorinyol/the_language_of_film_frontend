import React from 'react';
import { Navigation } from './'
import { shallow, mount } from '../../test/config/enzyme'
import { MemoryRouter } from 'react-router-dom'

const props = {
    location: { 
        pathname: '/films/'
    } 
}

describe('<Navigation />', () => {
    it('should mount', (done) => {
        expect.assertions(1)
    
        const wrap = shallow(<Navigation {...props}/>)

        expect(wrap.exists()).toBeTruthy()
        return done()
    })

    it('should call useState', (done) => {
        expect.assertions(2)
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, 'useState')
        useStateSpy.mockImplementation((init) => [init, setState]);

        const wrap = mount(<MemoryRouter>
                <Navigation {...props} />
            </MemoryRouter>
        );
        
        const nav = wrap.find(Navigation)
        
        expect(nav).toMatchSnapshot()

        const newPathname = "/study/"
        
        const wordsTab = wrap.find(`a[href="${newPathname}"]`)
        
        wordsTab.simulate('click');
        expect(setState).toHaveBeenCalledWith(newPathname);
        jest.clearAllMocks();
        return done()
    })
})
