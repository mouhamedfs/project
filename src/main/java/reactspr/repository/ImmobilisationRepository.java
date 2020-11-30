package reactspr.repository;
import reactspr.domain.Immobilisation;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Personne entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ImmobilisationRepository extends JpaRepository<Immobilisation, Long> {
}
