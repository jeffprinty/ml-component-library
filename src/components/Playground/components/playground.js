/* eslint no-unused-vars:0 */
import 'babel-polyfill';
import React, { Component, PropTypes } from 'react';
import Editor from './editor';
import Preview from './preview';
import EsPreview from './es6-preview';
import Doc from './doc';

// MODIFIED COMPONENT FOR SIDE BY SIDE PREVIEWING
import styled from 'styled-components';

const PlaygroundWrap = styled.div`
  display: flex;
`;
const CodeEdit = styled.div`
  flex-direction: row;
  flex: 1;
  order: 2;
`;
const CodePreview = styled.div`
  flex-direction: row;
  flex: 1;
  order: 1;
  padding: 5px;
`;

class ReactPlayground extends Component {

  static defaultProps = {
    theme: 'monokai',
    noRender: true,
    context: {},
    initiallyExpanded: false
  };

  static propTypes = {
    codeText: PropTypes.string.isRequired,
    scope: PropTypes.object.isRequired,
    collapsableCode: PropTypes.bool,
    docClass: PropTypes.func,
    propDescriptionMap: PropTypes.object,
    theme: PropTypes.string,
    selectedLines: PropTypes.array,
    noRender: PropTypes.bool,
    es6Console: PropTypes.bool,
    context: PropTypes.object,
    initiallyExpanded: PropTypes.bool,
    previewComponent: PropTypes.node
  };

  state = {
    code: this.props.codeText,
    expandedCode: this.props.initiallyExpanded,
    external: true
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      code: nextProps.codeText,
      external: true
    });
  };

  _handleCodeChange = (code) => {
    this.setState({
      code,
      external: false
    });
  };

  _toggleCode = () => {
    this.setState({
      expandedCode: !this.state.expandedCode
    });
  };

  render() {
    const { code, external, expandedCode } = this.state;
    const {
      collapsableCode,
      context,
      docClass,
      es6Console,
      noRender,
      previewComponent,
      propDescriptionMap,
      scope,
      selectedLines,
      theme } = this.props;

    return (
      <PlaygroundWrap>
        {
          docClass ?
            <Doc
              componentClass={ docClass }
              propDescriptionMap={ propDescriptionMap } /> : null
        }
        <CodeEdit>
          <Editor
            className="playgroundStage"
            codeText={ code }
            external={ external }
            onChange={ this._handleCodeChange }
            selectedLines={ selectedLines }
            theme={ theme } />
        </CodeEdit>
        {
          collapsableCode ?
            <div className="playgroundToggleCodeBar">
              <span className="playgroundToggleCodeLink" onClick={ this._toggleCode }>
                {expandedCode ? 'collapse' : 'expand'}
              </span>
            </div>
          : null
        }
        <CodePreview>
          {
            es6Console ?
              <EsPreview
                code={ code }
                scope={ scope } /> :
              <Preview
                context={ context }
                code={ code }
                scope={ scope }
                noRender={ noRender }
                previewComponent={ previewComponent } />
          }
        </CodePreview>
      </PlaygroundWrap>
    );
  }

}

export default ReactPlayground;
