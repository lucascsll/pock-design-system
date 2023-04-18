import { colors } from '@positivo-poc/tokens'
// import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors.light).map(([theme, colors]) => {
    return (
      <div
        key={theme}
        style={{ backgroundColor: colors.primary, padding: '2rem' }}
      >
        {/* <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(colors.primary, '#fff') < 3.5 ? '#000' : '#fff',
          }}
        >
          <strong>{theme}</strong>
        </div> */}
        <strong>{theme}</strong>
      </div>
    )
  })
}
