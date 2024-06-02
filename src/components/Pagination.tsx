import Button from "react-bootstrap/Button";

interface PaginationProps {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    onNextPage: () => void;
    onPreviousPage: () => void;
    page: number;
    totalPages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
    hasNextPage,
    hasPreviousPage,
    onNextPage,
    onPreviousPage,
    page,
    totalPages,
}) => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="prev mb-3">
                <Button
                    disabled={!hasPreviousPage}
                    onClick={onPreviousPage}
                    variant="primary"
                >
                    Previous Page
                </Button>
            </div>

            <div className="page mb-3">
                Page {page}
                {totalPages && <>/{totalPages}</>}
            </div>

            <div className="next mb-3">
                <Button
                    disabled={!hasNextPage}
                    onClick={onNextPage}
                    variant="primary"
                >
                    Next Page
                </Button>
            </div>
        </div>
    );
}

export default Pagination;
