export default {
  "defs": {
    "onEvents": {
      "type": "array",
      "items": {
        "allOf": [
          {
            "type": "object",
            "properties": {
              "events": {
                "oneOf": [
                  {"$ref": "#/refs/selector"},
                  {"$ref": "#/refs/signal"},
                  {
                    "type": "object",
                    "properties": {
                      "scale": {"type": "string"}
                    },
                    "required": ["scale"]
                  },
                  {"$ref": "#/defs/stream"},
                  {
                    "type": "array",
                    "minItems": 1,
                    "items": {"$ref": "#/defs/stream"}
                  }
                ]
              },
              "force": {"type": "boolean"}
            },
            "required": ["events"]
          },
          {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "encode": {"type": "string"}
                },
                "required": ["encode"]
              },
              {
                "type": "object",
                "properties": {
                  "update": {
                    "oneOf": [
                      {"$ref": "#/refs/exprString"},
                      {"$ref": "#/refs/expr"},
                      {"$ref": "#/refs/signal"},
                      {
                        "type": "object",
                        "properties": {"value": {}},
                        "required": ["value"]
                      }
                    ]
                  }
                },
                "required": ["update"]
              }
            ]
          }
        ]
      }
    }
  }
};
