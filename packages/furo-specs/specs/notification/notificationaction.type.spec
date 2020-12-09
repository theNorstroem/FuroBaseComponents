name: notificationaction
type: Notificationaction
description: autogenerated
__proto:
    package: notification
    targetfile: notification.proto
    imports: []
    options:
        java_outer_classname: NotificationApi
fields:
    text:
        type: string
        description: text of notificationaction
        __proto:
            number: 1
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: notificationaction.text.id.label
            options: null
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    command:
        type: string
        description: command of a notificationaction
        __proto:
            number: 2
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: notificationaction.command.displayName.label
            options: null
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
    icon:
        type: string
        description: icon of a notificationaction
        __proto:
            number: 3
            oneof: ""
        __ui: null
        meta:
            default: ""
            hint: ""
            label: notificationaction.icon.displayName.label
            options: null
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
