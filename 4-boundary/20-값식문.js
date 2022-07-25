// This JSX:
ReactDOM.render(
  <div id="msg">
    Hello World!
  </div>,
  mountNode
)

// Is transformed to this JS:
ReactDOM.render(React.createElement('div', { id: 'msg' }, 'Hello World!'), mountNode)

// ❌ This JSX: error
<div id={if (condition) { 'msg' }}>Hello World!</div>

// ❌ Is transformed to this JS:
React.createElement('div', { id: if (condition) { 'msg' }}, 'Hello World!');

// ⭕️ Is transformed to this JS:
ReactDOM.render(<div id={condition ? 'msg' : null}>Hello World!</div>, mountNode)

// ⭕️ IIFF, 즉시실행함수는 값을 반환하기 때문에 JSX 안에서 작성될 수 있다.
function ReactComponent() {
  return (
    <section>
      <h1>Color</h1>
      <h3>Name</h3>
      <p>{this.state.color || 'white'}</p>
      <h3>Hex</h3>
      <p>
        {(() => {
          switch (this.state.color) {
            case 'red':
              return '#FF000'
            case 'green':
              return '#00FF00'
            case 'blue':
              return '#0000FF'
            default:
                return '#FFFFF'
          }
        })}
      </p>
    </section>
  )
}

// 🔥 for 문 보다는, 고차함수를 사용하자
function ReactComponent2() {
  return (
    <tbody>
      {/* for문 */}
      {(() => {
        const rows = [];

        for (let i = 0; i < objectRows.length; i++) {
          rows.push(<ObjectRow key={i} data={objectRows[i]} />)
        }

        return rows;
      })()}

      {/* 고차 함수 */}
      {objectRows.map((obj, i) => {
        <ObjectRow key={i} data={obj} />
      })}
    </tbody>
  )
}

// 🔥 논리 연산자를 사용하자
function ReactComponent2() {
  return (
    <tbody>
      {(() => {
        if (conditionOne) return <span>One</span>
        if (conditionTwo) return <span>Two</span>
        else conditionOne;
        return <span>Three</span>
      })()}

      {/* 논리 연산자 */}
      {conditionOne && <span>One</span>} 
      {conditionTwo && <span>Two</span>}
      {!conditionTwo && <span>Three</span>}
    </tbody>
  )
}