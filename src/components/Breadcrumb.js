import React from 'react'

import Breadcrumb from 'react-bulma-components/lib/components/breadcrumb'
import Container from 'react-bulma-components/lib/components/container'

export default () => {
    // const items = router.asPath.split('/').reduce((acc, val, idx, arr) => {
    //     acc.push({
    //         name: idx === 0 ? 'Start' : val,
    //         url: idx === 0 ? '' : `${acc[idx-1].url}/${val}`,
    //     })
    //     return acc
    //   }, [])
    const items = [{name: 'Start', url: '/'}]
    return (
        <Container>
            <Breadcrumb items={items}/>
        </Container>
    )
}
