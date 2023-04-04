import { light } from '@positivo-pock/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(light.color.pink).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
          }}
        >
          <strong>${key}</strong>
        </div>
      </div>
    )
  })
}