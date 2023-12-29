// import { CHART_COLORS } from '@/styles/colors'

const loadsmartPowerBITheme = {
  name: 'Loadsmart Theme',
//   dataColors: Object.values(),
  firstLevelElements: '#252423',
  secondLevelElements: '#605E5C',
  thirdLevelElements: '#F3F2F1',
  fourthLevelElements: '#B3B0AD',
  background: '#FFFFFF',
  secondaryBackground: '#C8C6C4',
  tableAccent: '#118DFF',
  visualStyles: {
    '*': {
      '*': {
        '*': [
          {
            fontFamily: 'Helvetica',
          },
        ],
        general: [
          {
            keepLayerOrder: true,
            responsive: true,
          },
        ],
        legend: [
          {
            show: true,
            position: 'Top',
            showTitle: false,
            legendMarkerRendering: 'lineAndMarker',
            matchLineColor: true,
            fontSize: 12,
          },
        ],
        title: [
          {
            show: false,
          },
        ],
        background: [
          {
            show: false,
            color: { solid: { color: '#002a5b' } },
            transparency: 25,
          },
        ],
        lockAspect: [
          {
            show: true,
          },
        ],
        border: [
          {
            show: false,
          },
        ],
        visualTooltip: [
          {
            type: 'Default',
          },
        ],
        stylePreset: [
          {
            name: 'None',
          },
        ],
        visualHeader: [
          {
            show: true,
            showVisualInformationButton: false,
            showVisualWarningButton: false,
            showVisualErrorButton: false,
            showDrillRoleSelector: false,
            showDrillUpButton: true,
            showDrillToggleButton: true,
            showDrillDownLevelButton: true,
            showDrillDownExpandButton: true,
            showPinButton: false,
            showFocusModeButton: true,
            showFilterRestatementButton: false,
            showSeeDataLayoutToggleButton: false,
            showOptionsMenu: false,
            showTooltipButton: false,
          },
        ],
        visualHeaderTooltip: [
          {
            text: 'Header tooltip text',
            titleFontColor: { solid: { color: '#cc6600' } },
            transparency: 0,
            background: { solid: { color: '#002a5b' } },
          },
        ],
        dropShadow: [
          {
            show: false,
          },
        ],
      },
    },
    lineClusteredColumnComboChart: {
      '*': {
        categoryAxis: [
          {
            showAxisTitle: false,
          },
        ],
        valueAxis: [
          {
            gridlineShow: true,
            gridlineThickness: 1,
            gridlineStyle: 'dashed',
          },
        ],
        lineStyles: [
          {
            strokeWidth: 2,
            showMarker: true,
            markerShape: 'circle',
            markerSize: 4,
          },
        ],
      },
    },
  },
}

export { loadsmartPowerBITheme }