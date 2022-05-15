export interface ChartData {
  labels: number[],
  datasets: Array<
    {
      data: number[],
      label: string,
      borderColor: string,
      fill: boolean
    }>
}
