name: projectfilter
type: Projectfilter
description: Options for possible filter values
__proto:
    package: projectfilter
    targetfile: projectfilter.proto
    imports:
        - furo/furo.proto
        - google/type/date.proto
        - google/type/money.proto
    options: {}
fields:
    description:
        type: string
        description: Filter preset for field description from resource projects
        __proto:
            number: 1
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Description
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    start:
        type: google.type.Date
        description: Start date of the project
        __proto:
            number: 2
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Project start
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    end:
        type: google.type.Date
        description: Prospective end date of the project
        __proto:
            number: 3
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Project end
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    members:
        type: furo.Reference
        description: List of possible project members
        __proto:
            number: 4
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: Choose person
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    cost_limit:
        type: google.type.Money
        description: Project cost limit
        __proto:
            number: 5
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: google.type.Money
            label: Cost limit
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
