import { Table, Button } from 'flowbite-react';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar"
const BidRequest = () => {
    return (
        <div className='mx-48'>
            <Table striped>
                <Table.Head>
                    <Table.HeadCell>Job title</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Deadline</Table.HeadCell>
                    <Table.HeadCell>Status</Table.HeadCell>
                    <Table.HeadCell>Price</Table.HeadCell>
                    <Table.HeadCell>Accept button</Table.HeadCell>
                    <Table.HeadCell>Reject button</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {'Apple MacBook Pro 17"'}
                        </Table.Cell>
                        <Table.Cell>Sliver</Table.Cell>
                        <Table.Cell>Laptop</Table.Cell>
                        <Table.Cell>$2999</Table.Cell>
                        <Table.Cell>$2999</Table.Cell>
                        <Table.Cell><Button color="success">Success</Button></Table.Cell>
                        <Table.Cell><Button color="success">Success</Button></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
};

export default BidRequest;