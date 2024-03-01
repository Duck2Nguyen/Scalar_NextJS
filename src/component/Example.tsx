"use client"
import React from 'react'
import { ApiReference as VueComponent } from '@scalar/api-reference'
import { applyVueInReact } from 'veaury'


export const Example = () => {
    const ApiReference = applyVueInReact(VueComponent)

    const configuration = {
        spec: {
            openapi: '3.0.0',
            info: {
                title: 'My API',
                version: '1.0.0',
            },
            servers: [
                {
                url: 'https://jsonplaceholder.typicode.com',
                description: 'My API server',
                },
            ],
            paths: {
                '/posts': {
                get: {
                    summary: 'Get my endpoint',
                    responses: {
                    '200': {
                        description: 'Successful response',
                        content: {
                        'application/json': {
                            schema: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                // your properties here
                                },
                            },
                            },
                        },
                        },
                    },
                    },
                },
                },
            },
        },
    }

    return (
        <>
            Hello
            {/* Explanation: https://github.com/devilwjp/veaury#typescript-jsx-types-conflict-caused-by-vue-and-react-at-the-same-time
            // @ts-ignore */}
           <ApiReference configuration={configuration} />
        </>
    )
  }