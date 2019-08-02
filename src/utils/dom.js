import ReactDOM from 'react-dom';

export function renderDOMIntoPage(element, container) {
  container = container || document.body;
  const renderContainer = document.createElement('div');
  container.appendChild(renderContainer);
  ReactDOM.render(element, renderContainer);

  return renderContainer;
}

export function removeDOMFromPage(renderContainer, container) {
  container = container || document.body;
  if (renderContainer) {
    ReactDOM.unmountComponentAtNode(renderContainer);
    container.removeChild(renderContainer);
  }
}