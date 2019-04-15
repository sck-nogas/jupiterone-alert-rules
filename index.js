
const defaultAlertSettings = {
  version: "v1",
  pollingInterval: "ONE_DAY",
  outputs: [
    "alertLevel"
  ],
  operations: [
    {
      when: {
        type: "FILTER",
        version: 1,
        condition: [
          "AND",
          [ "queries.query0.total", "!=", 0 ]
        ]
      },
      actions: [
        {
          type: "SET_PROPERTY",
          targetProperty: "alertLevel",
          targetValue: "CRITICAL"
        },
        {
          type: "CREATE_ALERT"
        }
      ]
    }
  ]
}

module.exports = {
  defaultAlertSettings
}