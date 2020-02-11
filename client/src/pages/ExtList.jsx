import React, { Component } from 'react'
import ReactTable from 'react-table'
import api, {getAllExts} from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class ExtList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exts: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllExts().then(exts => {
            this.setState({
                exts: exts.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { exts, isLoading } = this.state

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            }
        ]

        let showTable = true
        // if (!exts.length) {
        //     showTable = false
        // }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={exts}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default ExtList
