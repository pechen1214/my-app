export function Exchange({exchange}) {
console.log(exchange)
  return (
<div class="header__exchange">
<div class="exchange">
  <table>
    <tbody>
      <tr>
        <td>ЦБ USD</td>
        <td>{}</td>
        <td>{exchange.date}</td>
      </tr>
      <tr>
        <td>ЦБ EUR</td>
        <td>{'33'}</td>
        <td>{exchange.date}</td>
      </tr>
    </tbody>
  </table>
</div>
</div>)

}