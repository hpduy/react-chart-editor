export const baseClass = 'plotly-editor';

/*
 * Control represents multiple settings (like for several axes)
 * and the values are different.
 *
 * Because this is sometimes used in contexts where users can enter freeform
 * strings, we include a non-printable character (ESC) so it's not something
 * people could type.
 */
export const MULTI_VALUED = '\x1bMIXED_VALUES';

// how mixed values are represented in text inputs
export const MULTI_VALUED_PLACEHOLDER = '---';

export const getMultiValueText = (key, _) => {
  const multiValueText = {
    title: _('Multiple Values'),
    text: _(
      'This input has multiple values associated with it. ' +
        'Changing this setting will override these custom inputs.'
    ),
    subText: _(
      "Common Case: An 'All' tab might display this message " +
        'because the X and Y tabs contain different settings.'
    ),
  };
  return multiValueText[key];
};

export const EDITOR_ACTIONS = {
  UPDATE_TRACES: 'plotly-editor-update-traces',
  ADD_TRACE: 'plotly-editor-add-trace',
  DELETE_TRACE: 'plotly-editor-delete-trace',
  UPDATE_LAYOUT: 'plotly-editor-update-layout',
  DELETE_ANNOTATION: 'plotly-editor-delete-annotation',
  DELETE_SHAPE: 'plotly-editor-delete-shape',
  DELETE_IMAGE: 'plotly-editor-delete-image',
  DELETE_RANGESELECTOR: 'plotly-editor-delete-rangeselector',
  DELETE_TRANSFORM: 'plotly-editor-delete-transform',
};

export const DEFAULT_FONTS = [
  {label: 'Sans Serif', value: 'sans-serif'},
  {label: 'Serif', value: 'serif'},
  {label: 'Monospaced', value: 'monospace'},
];

export const RETURN_KEY = 'Enter';
export const ESCAPE_KEY = 'Escape';
export const COMMAND_KEY = 'Meta';
export const CONTROL_KEY = 'Control';

// matches gd._fullLayout._subplots categories except for xaxis & yaxis which
// are in fact cartesian types
export const TRACE_TO_AXIS = {
  cartesian: [
    'scatter',
    'scattergl',
    'box',
    'bar',
    'heatmap',
    'heatmapgl',
    'contour',
    'ohlc',
    'candlestick',
  ],
  ternary: ['scatterternary'],
  gl3d: ['scatter3d', 'surface', 'mesh3d'],
  geo: ['scattergeo', 'choropleth'],
  mapbox: ['scattermapbox'],
  polar: ['scatterpolar', 'scatterpolargl'],
};

export const TRANSFORMS_LIST = ['filter', 'groupby', 'aggregate'];
