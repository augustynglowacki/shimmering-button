document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.animated-button');
  const svg = button.querySelector('.button-svg');
  const text = svg.querySelector('.button-text');
  const group = svg.querySelector('.button-content');
  
  // Get text dimensions
  const bbox = text.getBBox();
  
  // Add padding
  const padding = {
    x: 32,
    y: 20
  };
  
  // Calculate dimensions
  const width = bbox.width + (padding.x * 2);
  const height = bbox.height + (padding.y * 2);
  
  // Set SVG viewport
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  
  // Set actual SVG dimensions
  svg.style.width = `${width}px`;
  svg.style.height = `${height}px`;
  
  // Set button dimensions
  button.style.width = `${width}px`;
  button.style.height = `${height}px`;
  
  // Create background and borders with correct dimensions
  const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  const defaultBorder = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  const hoverBorder = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  
  // Background (inset by 4px)
  background.setAttribute('class', 'button-bg');
  background.setAttribute('x', '8');
  background.setAttribute('y', '8');
  background.setAttribute('width', width - 16);
  background.setAttribute('height', height - 16);
  background.setAttribute('rx', (height - 16) / 2);
  
  // Borders
  const borderAttrs = {
    x: '2',
    y: '2',
    width: width - 4,
    height: height - 4,
    rx: (height - 4) / 2
  };
  
  defaultBorder.setAttribute('class', 'button-outline-default');
  hoverBorder.setAttribute('class', 'button-outline-hover');
  
  Object.entries(borderAttrs).forEach(([attr, value]) => {
    defaultBorder.setAttribute(attr, value);
    hoverBorder.setAttribute(attr, value);
  });
  
  // Insert elements in correct order
  group.insertBefore(hoverBorder, text);
  group.insertBefore(defaultBorder, hoverBorder);
  group.insertBefore(background, defaultBorder);
}); 