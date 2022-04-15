import ListMyProjects from './ListMyProjects';
import CreateProject from './CreateProjectModal';

export default function MyProjects() {
    return (
        <div>
            <CreateProject />
            <ListMyProjects />
        </div>
    );
}
