package reactspr.service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.sql.Date;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.GregorianCalendar;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactspr.domain.Immobilisation;
import reactspr.domain.PrepaImmo;
import reactspr.domain.SubImmo;
import reactspr.domain.Subvention;
import reactspr.repository.PrepaImmoRepository;
import reactspr.repository.SubImmoRepository;
import reactspr.repository.SubventionRepository;
import reactspr.repository.ImmobilisationRepository;

@Service
@Transactional
public class PrepaImmoService {

    private final PrepaImmoRepository prepaImmoRepository ;
    private final ImmobilisationRepository immobilisationRepository;
    private final SubventionRepository subventionRepository ;
    private final SubImmoRepository subImmoRepository;

    private  Immobilisation immo;
    private  SubImmo subImmo;


    public PrepaImmoService(PrepaImmoRepository prepaImmoRepository,
    ImmobilisationRepository immobilisationRepository,
    SubventionRepository subventionRepository,
    SubImmoRepository subImmoRepository) {
		this.prepaImmoRepository = prepaImmoRepository;
        this.immobilisationRepository = immobilisationRepository;
        this.subventionRepository = subventionRepository;
        this.subImmoRepository = subImmoRepository;
	}
 
    @Transactional
    public Page<PrepaImmo> getAllManagedPage(Pageable pageable) {
        return prepaImmoRepository.findAll(pageable);
    }

    @Transactional
    public void operation(PrepaImmo prepaImmo) {
        long result = prepaImmo.getNumSubv();
        Subvention sub = subventionRepository.findById(result).get();
        Float dejaDepensee = sub.getDejaDepense();
        Float Valacq = prepaImmo.getValacq();
        Date dms = prepaImmo.getDms();
        Float mntSubvention = sub.getMntSubv();
         Calendar calendar = new GregorianCalendar();
         Float taux = prepaImmo.getTaux();
         int Quantite = prepaImmo.getNbre();
         int tauxSubv = prepaImmo.getTauxSubv();
         long numeroImmo = prepaImmo.getNumero();

        if(prepaImmo.getNumero()!= null
         || prepaImmo.getMarque() != null
          || prepaImmo.getCdir() != null
        || prepaImmo.getCserv() != null
        ||prepaImmo.getLocal() != null
        || prepaImmo.getType() != null
        || prepaImmo.getDms() != null
        || prepaImmo.getDdac() != null
        || prepaImmo.getFourn() != null)
        {
         if(prepaImmo.getNumSubv()!=null && prepaImmo.getNumSubv()>0)
            {
            

            if(dejaDepensee + Valacq * Quantite * tauxSubv <= mntSubvention)
            {
                
                if(prepaImmo.getTaux() != 0)
                {
                    calendar.setTime(dms);
                    int an = calendar.get(Calendar.YEAR) + Math.round(1/taux);
                    int mois = calendar.get(Calendar.MONTH) + 1;
                    int jour = calendar.get(Calendar.DAY_OF_MONTH);
                    if(jour == 31)
                    {
                        jour = 30;
                    }
                    if(mois ==1 && jour ==1)
                    {  
                        mois=12;
                        an = an -1;
                        jour = 30;
                    }
                    //mois = mois;
                    jour-=1;
                    if(calendar.get(Calendar.DAY_OF_MONTH)==1)
                    {
                        jour = 30;
                        mois-=1;
                        if(mois ==2)
                        {
                            mois=3;
                            jour =0;
                            //LocalDate datef = LocalDate.of( an , mois , jour );
                        }
                    }
                    LocalDate datef = LocalDate.of( an , mois , jour );
                    Date date = java.sql.Date.valueOf(datef);
                    immo.setLibimmo(prepaImmo.getLibimmo());
                    immo.setFourn(prepaImmo.getFourn());
                    immo.setDfact(prepaImmo.getDfact());
                    immo.setValacq(prepaImmo.getValacq());
                    immo.setDdac(prepaImmo.getDdac());
                    immo.setDms(prepaImmo.getDms());
                    immo.setCpteBenef(prepaImmo.getCpteBenef());
                    immo.setCdir(prepaImmo.getCdir());
                    immo.setCserv(prepaImmo.getCserv());
                    immo.setAge(prepaImmo.getAge());
                    immo.setLocal(prepaImmo.getLocal());
                    immo.setCptimmo(prepaImmo.getCptimmo());
                    immo.setCptamort(prepaImmo.getCptamort());
                    immo.setCptdot(prepaImmo.getCptdot());
                    immo.setTaux(prepaImmo.getTaux());
                    immo.setDfs(date);
                    immo.setDatfam(date);
                    immo.setCsfam(prepaImmo.getType());
                    immo.setImmoamort(true);
                    immo.setDatcalc(prepaImmo.getDms());
                    immo.setDuree((float) Math.round(1/taux));
                    immo.setDatcalc(prepaImmo.getDms());
                    immo.setDatcalc(prepaImmo.getDms());
                    immo.setNumBonComm(prepaImmo.getNumBonComm());
                    immo.setDateBonComm(prepaImmo.getDateBonComm());
                    immo.setBonLiv(prepaImmo.getBonLiv());
                    immo.setAnccodif(prepaImmo.getAnccodif());
                    immo.setAncCompte(prepaImmo.getAncCompte());
                    immo.setComptabilise(prepaImmo.getComptabilise());
                    immo.setValrest(prepaImmo.getValacq());
                    immo.setOper(prepaImmo.getOperateurSaisi());
                    immo.setImmoRattache(prepaImmo.getImmoRattache());
                    immo.setNumSubv(prepaImmo.getNumSubv());
                    immo.setBlocnotes(prepaImmo.getBlocnotes());
                    for(int i =0; i< Quantite;i++)
                    {
                       immobilisationRepository.save(immo);
                    }
                    if(prepaImmo.getNumSubv()!=0 && prepaImmo.getNumSubv() >0)
                    {
                        dejaDepensee +=Valacq * Quantite*tauxSubv;
                        sub.setDejaDepense(dejaDepensee);
                        Subvention r = subventionRepository.save(sub);

                        String cptResulSubVal = sub.getCptSubVire();
                        String cptSubRepVal = sub.getCptSubRep();
                        for(int i =0; i< Quantite;i++)
                        {
                            numeroImmo = numeroImmo +i;
                            subImmo.setNumSub((long) prepaImmo.getNumSubv());
                            subImmo.setNumImmo((int) numeroImmo);
                            subImmo.setTauxAmort(taux);
                            subImmo.setMontant(Valacq*tauxSubv);
                            subImmo.setDateServImmo(dms);
                            subImmo.setCptResulSub(cptResulSubVal);
                            subImmo.setCptSubRep(cptSubRepVal);
                            subImmoRepository.save(subImmo);
                        }
                    } 
                }
                else
                {
                    immo.setLibimmo(prepaImmo.getLibimmo());
                    immo.setFourn(prepaImmo.getFourn());
                    immo.setNumfact(prepaImmo.getNumfact());
                    immo.setDfact(prepaImmo.getDfact());
                    immo.setValacq(prepaImmo.getValacq());
                    immo.setDdac(prepaImmo.getDdac());
                    immo.setDms(prepaImmo.getDms());
                    immo.setCpteBenef(prepaImmo.getCpteBenef());
                    immo.setCdir(prepaImmo.getCdir());
                    immo.setCserv(prepaImmo.getCserv());
                    immo.setAge(prepaImmo.getAge());
                    immo.setLocal(prepaImmo.getLocal());
                    immo.setCptimmo(prepaImmo.getCptimmo());
                    immo.setCptamort(prepaImmo.getCptamort());
                    immo.setCptdot(prepaImmo.getCptdot());
                    immo.setTaux(prepaImmo.getTaux());
                    immo.setCsfam(prepaImmo.getType());
                    immo.setNumBonComm(prepaImmo.getNumBonComm());
                    immo.setDateBonComm(prepaImmo.getDateBonComm());
                    immo.setBonLiv(prepaImmo.getBonLiv());
                    immo.setAnccodif(prepaImmo.getAnccodif());
                    immo.setAncCompte(prepaImmo.getAncCompte());
                    immo.setComptabilise(prepaImmo.getComptabilise());
                    immo.setValrest(prepaImmo.getValacq());
                    immo.setOper(prepaImmo.getOperateurSaisi());
                    immo.setImmoRattache(prepaImmo.getImmoRattache());
                    immo.setNumSubv(prepaImmo.getNumSubv());
                    immo.setBlocnotes(prepaImmo.getBlocnotes());
                    for(int i =0; i< prepaImmo.getNbre();i++)
                    {
                       Immobilisation result2 = immobilisationRepository.save(immo);
                    }
                }
            }
            else{
                throw new MessageException("Le montant des valeurs d'acquisition est supérieure au montant de la subvention ");
            }

 
        }
    
    }

    }
}
