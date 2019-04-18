import React from 'react';
import styled from 'styled-components';
import { Span, H1, H3, HeaderTop } from './Styled-components';
import PropTypes from 'prop-types';

const Header = (props) => (
    <HeaderTop className="top">
        <H1>
            Catch
            <Span className="ofThe">
                <Span className="of">Of</Span>
                <Span className="the">  The</Span>
            </Span>
            Day
        </H1>   
        <H3>
            <Span clannName="tagline">{props.tagline}</Span>
        </H3>
    </HeaderTop>
);

Header.propTypes = {
    tagline: PropTypes.string.isRequired
}

export default Header